package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.collections.FavoriteQuestion;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.FavoriteQuestionRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.usecases.question.SaveQuestion;
import co.com.sofka.questions.util.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class SaveFavoriteQuestionUseCase implements SaveFavoriteQuestion {
    private final FavoriteQuestionRepository questionRepository;
    private final MapperUtils mapperUtils;

    public SaveFavoriteQuestionUseCase(MapperUtils mapperUtils, FavoriteQuestionRepository favoriteQuestionRepository) {
        this.questionRepository = favoriteQuestionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(FavoriteQuestionDTO favoriteQuestionDTO) {
        return questionRepository
                .save(mapperUtils.mapperToFavoriteQuestion(null).apply(favoriteQuestionDTO))
                .map(FavoriteQuestion::getId);
    }

}
