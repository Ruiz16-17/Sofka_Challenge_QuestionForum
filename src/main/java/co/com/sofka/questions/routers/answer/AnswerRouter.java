package co.com.sofka.questions.routers.answer;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.usecases.answer.LikeAnswerUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.PUT;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class AnswerRouter {

    @Bean
    public RouterFunction<ServerResponse> likeAnswer(LikeAnswerUseCase likeAnswerUseCase){
        return route(PUT("/likeAnswer").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(AnswerDTO.class)
                        .flatMap(likeAnswerUseCase::apply)
                        .flatMap(result -> ServerResponse.ok()
                                .contentType(MediaType.TEXT_PLAIN)
                                .bodyValue(result)));
    }
}
