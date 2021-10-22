package co.com.sofka.questions.usecases.answer;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.service.SendMailService;
import co.com.sofka.questions.usecases.question.GetUseCase;
import co.com.sofka.questions.usecases.question.ListUseCase;
import co.com.sofka.questions.util.MapperUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.time.LocalDate;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AddAnswerUseCaseTest {

    AnswerRepository answerRepository;
    AddAnswerUseCase deleteAnswerUseCase;
    SendMailService sendMailService;
    GetUseCase getUseCase;

    @BeforeEach
    public void setup(){
        MapperUtils mapperUtils = new MapperUtils();
        answerRepository = mock(AnswerRepository.class);
        deleteAnswerUseCase = new AddAnswerUseCase(sendMailService,mapperUtils,getUseCase,answerRepository);
    }
/*
    @Test
    void deleteAnswerTest(){
        var answer =  new Answer();
        answer.setUserId("xxxx-xxxx");
        answer.setAnswer("Answer");
        answer.setId("xxx-xxxx");
        answer.setPosition(1);
        answer.setQuestionId("x");

        AnswerDTO answerDTO = new AnswerDTO((answer.getQuestionId(),answer.getUserId(),answer.getAnswer(),answer.getPosition(),answer.getId());
        Mono<Answer> answerMono = Mono.just(answer);

        when(answerRepository.save(any())).thenReturn(answerMono);

        StepVerifier.create(.apply(answer))
                .expectNextMatches(result -> {
                    assert result.equals("");
                    return true;
                })
                .verifyComplete();

    }
*/
}