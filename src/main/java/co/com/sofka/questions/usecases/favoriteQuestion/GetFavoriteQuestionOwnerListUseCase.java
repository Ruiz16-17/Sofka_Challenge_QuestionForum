package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.FavoriteQuestionRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.usecases.question.ListUseCase;
import co.com.sofka.questions.util.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.function.Function;
import java.util.function.Supplier;

@Service
@Validated
public class GetFavoriteQuestionOwnerListUseCase {

    private final FavoriteQuestionRepository favoriteQuestionRepository;
    private final ListUseCase listUseCase;
    private final MapperUtils mapperUtils;

    public GetFavoriteQuestionOwnerListUseCase(MapperUtils mapperUtils, FavoriteQuestionRepository favoriteQuestionRepository, ListUseCase listUseCase) {
        this.favoriteQuestionRepository = favoriteQuestionRepository;
        this.mapperUtils = mapperUtils;
        this.listUseCase = listUseCase;
    }

    private Flux<String> getAllFavoriteQuestionsIdByUserId(String userId) {
        return favoriteQuestionRepository.findFavoriteQuestionsByUserId(userId)
                .map(mapperUtils.mapEntityToFavoriteQuestion())
                .map(FavoriteQuestionDTO::getQuestionId);

    }


    public Flux<QuestionDTO> getAllFavoriteQuestionsByUserId(String userId) {
        return listUseCase.get()
                .filterWhen(questionDTO ->
                        getAllFavoriteQuestionsIdByUserId(userId).hasElement(questionDTO.getId()));
    }
}
