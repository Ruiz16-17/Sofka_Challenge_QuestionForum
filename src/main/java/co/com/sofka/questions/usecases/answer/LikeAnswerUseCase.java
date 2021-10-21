package co.com.sofka.questions.usecases.answer;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.util.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class LikeAnswerUseCase implements UpdateAnswer {

    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;

    public LikeAnswerUseCase(AnswerRepository answerRepository, MapperUtils mapperUtils) {
        this.answerRepository = answerRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(AnswerDTO answerDTO) {
        Objects.requireNonNull(answerDTO.getId(), "Id of the question is required");
        answerDTO.setPosition(answerDTO.getPosition() + 1);
        return answerRepository
                .save(mapperUtils.mapperToAnswer(answerDTO.getId())
                        .apply(answerDTO))
                .map(Answer::getId);
    }

}
