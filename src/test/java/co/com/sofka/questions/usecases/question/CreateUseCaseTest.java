package co.com.sofka.questions.usecases.question;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static reactor.core.publisher.Mono.when;

@SpringBootTest
class CreateUseCaseTest {
/*
    @SpyBean
    private CreateUseCase createUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void createResource(){

        var resourceDT0 = new QuestionDTO("xxx-xxx","x","Qué es java","tecnologia",
                "TECNOLOGIA",   "prueba@gmail.com");

        var question = new Question();
        question.setId("xxx");
        question.setUserId("yyy");
        question.setQuestion("React o Angular");
        question.setType("tecnologia");
        question.setCategory("TECNOLOGIA");
        question.setUserEmail("prueba@gmail.com");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = createUseCase.apply(resourceDT0);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"xxx");
    }

*/
}