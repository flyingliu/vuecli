<template>
    <div> this is B.2
    </div>
</template>

<script>
    export default {
    
        beforeRouterEnter(route, redirect, next) {
            console.log(route, redirect, next);
            let confirm = window.confirm("are you leave this");
            if (confirm) {
                next()
            } else {
                redirect("/");
            }
        }
    
    
    }
</script>