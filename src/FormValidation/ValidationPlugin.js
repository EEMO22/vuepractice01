import validationDirective from "./ValidationDirective";
import validator from "./Validator";

export default {
    install(Vue) {
        Vue.directive('validate', validationDirective);

        Vue.mixin({
            data() {
                return {
                    errorBag: {}
                };
            },

            computed: {
                $errors () {
                    const errorBag = this.errorBag || {};

                    return {
                        has(key) { return !!errorBag[key] },
                        first(key) { return errorBag[key][0] }
                    }
                },

                $validator () {
                    const context = this;

                    return {
                        validateAll() {
                            for (const key of validator.validate.keys()) {
                                const errors = validator.validate(key, context[key]);

                                if (errors.length) {
                                    context.$set(context.errorBag, key, errors);
                                } else {
                                    context.$delete(context.errorBag, key);
                                }
                            }
                        }
                    }
                }

            }
        })
    },
}
