package co.com.sofka.questions.routers.answer;

import co.com.sofka.questions.Service.SendMailService;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.usecases.answer.AddAnswerUseCase;
import co.com.sofka.questions.usecases.answer.DeleteAnswerUseCase;
import co.com.sofka.questions.usecases.question.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class DeleteAnswerRouter {

    @Bean
    public RouterFunction<ServerResponse> deleteAnswer(DeleteAnswerUseCase deleteAnswerUseCase) {
        return route(
                DELETE("/deleteAnswer/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.accepted()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(deleteAnswerUseCase.apply(request.pathVariable("id")), Void.class))
        );
    }
}
