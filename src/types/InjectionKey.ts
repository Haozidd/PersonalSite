import {InjectionKey, Ref} from "vue";

type loadingType = {
    isLoading:Ref<Boolean>,
}
export const loading = Symbol() as InjectionKey<loadingType>
