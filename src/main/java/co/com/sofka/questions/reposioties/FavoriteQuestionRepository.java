package co.com.sofka.questions.reposioties;

import co.com.sofka.questions.collections.FavoriteQuestion;
import co.com.sofka.questions.collections.Question;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface FavoriteQuestionRepository extends ReactiveCrudRepository<FavoriteQuestion, String> {
    Flux<FavoriteQuestion> findFavoriteQuestionsByUserId(String userId);

    Mono<Void> deleteByQuestionId(String questionId);
}
