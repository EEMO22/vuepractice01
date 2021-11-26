<template>
    <div class=form>
        <form @submit.prevent='onSubmit'>
            <input
                type='text'
                name='name'
                v-model='name'
                v-validate="'required|minLen3'"
            />
            <p v-if="$errors.has('name')">
                {%raw%}{{ $errors.first('name') }}{%endraw%}
            </p>
            <button type='submit'>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll();
        },
    },
}
</script>
