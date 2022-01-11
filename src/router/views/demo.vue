<script>
import Layout2 from '@/router/layouts/main'
import PageHeader from '@/components/page-header'

export default {
    components: { Layout2, PageHeader },
    data(){
        return {
            title: "모두의메모",
            items: [
                "홈",
                "팀 메세지"
            ],
        };
    },
}
</script>

<template>
    <Layout2>
        <PageHeader :title="title" :items="items" />
        <h1>Hello Demo Page</h1>
    </Layout2>
</template>