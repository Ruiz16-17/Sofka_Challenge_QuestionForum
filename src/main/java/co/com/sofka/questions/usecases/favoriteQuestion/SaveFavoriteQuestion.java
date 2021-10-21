package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.model.QuestionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SaveFavoriteQuestion {
    Mono<String> apply(@Valid FavoriteQuestionDTO favoriteQuestionDTO);
}
