package co.com.sofka.questions.routers.favoriteQuestion;

import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.usecases.favoriteQuestion.SaveOrDeleteFavoriteQuestionUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class SaveOrDeleteFavoriteQuestionRouter {

    @Bean
    public RouterFunction<ServerResponse> createFavoriteQuestion(SaveOrDeleteFavoriteQuestionUseCase saveOrDeleteFavoriteQuestionUseCase) {
        Function<FavoriteQuestionDTO, Mono<ServerResponse>> executor = favoriteQuestionDTO ->  saveOrDeleteFavoriteQuestionUseCase.saveOrDeleteFavoriteQuestion(favoriteQuestionDTO)
                .flatMap(result -> ServerResponse.ok()
                        .contentType(MediaType.TEXT_PLAIN)
                        .bodyValue(result));

        return route(
                POST("/saveFavoriteQuestion").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(FavoriteQuestionDTO.class).flatMap(executor)
        );
    }

}
