package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.collections.FavoriteQuestion;
import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.reposioties.FavoriteQuestionRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.util.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class SaveOrDeleteFavoriteQuestionUseCase implements SaveFavoriteQuestion {
    private final FavoriteQuestionRepository favoriteQuestionRepository;
    private final QuestionRepository questionRepository;
    private final DeleteFavoriteQuestionUseCase deleteFavoriteQuestionUseCase;
    private final MapperUtils mapperUtils;
    private final GetFavoriteQuestionOwnerListUseCase getFavoriteQuestionOwnerListUseCase;

    public SaveOrDeleteFavoriteQuestionUseCase(MapperUtils mapperUtils, FavoriteQuestionRepository favoriteQuestionRepository, QuestionRepository questionRepository, DeleteFavoriteQuestionUseCase deleteFavoriteQuestionUseCase, GetFavoriteQuestionOwnerListUseCase getFavoriteQuestionOwnerListUseCase) {
        this.favoriteQuestionRepository = favoriteQuestionRepository;
        this.mapperUtils = mapperUtils;
        this.questionRepository = questionRepository;
        this.deleteFavoriteQuestionUseCase = deleteFavoriteQuestionUseCase;
        this.getFavoriteQuestionOwnerListUseCase = getFavoriteQuestionOwnerListUseCase;
    }

    public Mono<String> saveOrDeleteFavoriteQuestion(FavoriteQuestionDTO favoriteQuestionDTO) {
        System.out.println(favoriteQuestionDTO.isFavorite());
        /*
        if (false) {
            return deleteFavoriteQuestionUseCase.apply("6171e2472ac0f42843d52004").thenReturn("");
        }
        favoriteQuestionDTO.setFavorite(true);
        */
        apply(favoriteQuestionDTO);
        return apply(favoriteQuestionDTO);
    }

    @Override
    public Mono<String> apply(FavoriteQuestionDTO favoriteQuestionDTO) {
        return favoriteQuestionRepository
                .save(mapperUtils.mapperToFavoriteQuestion(null).apply(favoriteQuestionDTO))
                .map(FavoriteQuestion::getId);
    }

}
