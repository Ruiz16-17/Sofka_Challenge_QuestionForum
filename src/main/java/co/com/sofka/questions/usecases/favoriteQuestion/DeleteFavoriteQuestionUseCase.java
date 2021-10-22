package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.FavoriteQuestionRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.function.Function;

@Service
@Validated
public class DeleteFavoriteQuestionUseCase implements Function<String, Mono<Void>> {

    private final FavoriteQuestionRepository favoriteQuestionRepository;

    public DeleteFavoriteQuestionUseCase(FavoriteQuestionRepository favoriteQuestionRepository) {
        this.favoriteQuestionRepository = favoriteQuestionRepository;
    }

    @Override
    public Mono<Void> apply(String id) {
        return favoriteQuestionRepository.deleteById(id);
    }
}
