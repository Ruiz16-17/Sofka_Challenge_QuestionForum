package co.com.sofka.questions.usecases.favoriteQuestion;

import co.com.sofka.questions.model.FavoriteQuestionDTO;
import co.com.sofka.questions.reposioties.FavoriteQuestionRepository;
import co.com.sofka.questions.util.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@Service
@Validated
public class FavoriteQuestionOwnerListUseCase implements Function<String, Flux<FavoriteQuestionDTO>> {
    private final FavoriteQuestionRepository favoriteQuestionRepository;
    private final MapperUtils mapperUtils;

    public FavoriteQuestionOwnerListUseCase(MapperUtils mapperUtils, FavoriteQuestionRepository favoriteQuestionRepository) {
        this.favoriteQuestionRepository = favoriteQuestionRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Flux<FavoriteQuestionDTO> apply(String userId) {
        return favoriteQuestionRepository.findByUserId(userId)
                .map(mapperUtils.mapEntityToFavoriteQuestion());

    }
}
