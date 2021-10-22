package co.com.sofka.questions.usecases.answer;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.usecases.question.ListUseCase;
import co.com.sofka.questions.util.MapperUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.time.LocalDate;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class DeleteAnswerUseCaseTest {

    /*AnswerRepository answerRepository;
    DeleteAnswerUseCase deleteAnswerUseCase;

    @BeforeEach
    public void setup(){
        MapperUtils mapperUtils = new MapperUtils();
        answerRepository = mock(AnswerRepository.class);
        deleteAnswerUseCase = new DeleteAnswerUseCase(answerRepository);
    }


    @Test
    void deleteAnswerTest(){
        var answer =  new Answer();
        answer.setUserId("xxxx-xxxx");
        answer.setAnswer("Answer");
        answer.setId("xxx-xxxx");
        answer.setPosition(1);
        answer.setQuestionId("x");
        when(answerRepository.save(answer)).thenReturn(Mono.just(answer));

        StepVerifier.create(deleteAnswerUseCase.apply(answer.getId()))
                .expectNextMatches(result -> {
                    assert result.equals("");
                    return true;
                })
                .verifyComplete();

    }
*/

}