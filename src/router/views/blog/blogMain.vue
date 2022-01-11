<script>
import Layout from '@/router/layouts/main'
import PageHeader from '@/components/page-header'

export default {
    components: { Layout, PageHeader },
    data(){
        return {
            title: "우리 팀의 이야기",
            items: [
                "블로그 홈",
            ],
        };
    },
}
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div class="row">
            <div class="col-xl-9 col-lg-8">
                <div class="card">
                <b-tabs
                content-class="p-4"
                class="pt-2"
                nav-wrapper-class="nav-item"
                nav-class="justify-content-center nav-tabs-custom"
                >
                <b-tab title="팀1" active>
                <div>
                    <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div>
                        <div>
                            <div class="row justify-content-between">
                                <div class="col-xl-9 col-lg-8">
                                    <img
                                    class="rounded-circle header-profile-user"
                                    src="@/assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                    />
                                    <span class="d-none d-xl-inline-block ms-1">User1</span>
                                </div>
                                <div class="col-xl-3 col-lg-4 d-flex justify-content-end align-self-center"> 
                                    <span class="text-muted">1월7일 2022</span>
                                </div>
                            </div>
                            <br>
                            <div class="position-relative mb-3">
                            <img
                                src="@/assets/images/small/img-2.jpg"
                                alt=""
                                class="img-thumbnail"
                            />
                            </div>

                            <ul class="list-inline">
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                ></i>
                                Project
                                </a>
                            </li>
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-comment-dots align-middle text-muted me-1"
                                ></i>
                                12 Comments
                                </a>
                            </li>
                            </ul>
                            <p>
                                팀1의 프로젝트 시작!
                            </p>

                            <div>
                            <a href="javascript:void(0);" class="text-primary"
                                >Read more <i class="mdi mdi-arrow-right"></i
                            ></a>
                            </div>
                        </div>

                        <hr class="my-5" />

                        <div>
                            <div class="row justify-content-between">
                                <div class="col-xl-9 col-lg-8">
                                    <img
                                    class="rounded-circle header-profile-user"
                                    src="@/assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                    />
                                    <span class="d-none d-xl-inline-block ms-1">User1</span>
                                </div>
                                <div class="col-xl-3 col-lg-4 d-flex justify-content-end align-self-center"> 
                                    <span class="text-muted">1월7일 2022</span>
                                </div>
                            </div>
                            <br>

                            <div class="position-relative mb-3">
                            <img
                                src="@/assets/images/small/img-6.jpg"
                                alt=""
                                class="img-thumbnail"
                            />

                            <div class="blog-play-icon">
                                <a
                                href="javascript: void(0);"
                                class="avatar-sm d-block mx-auto"
                                >
                                <span
                                    class="avatar-title rounded-circle font-size-18"
                                    ><i class="mdi mdi-play"></i
                                ></span>
                                </a>
                            </div>
                            </div>

                            <ul class="list-inline">
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                ></i>
                                Development
                                </a>
                            </li>
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-comment-dots align-middle text-muted me-1"
                                ></i>
                                08 Comments
                                </a>
                            </li>
                            </ul>

                            <p>
                            팀1의 프로젝트 시작 !
                            </p>

                            <div>
                            <a href="javascript:void(0);" class="text-primary"
                                >Read more <i class="mdi mdi-arrow-right"></i
                            ></a>
                            </div>
                        </div>

                        <hr class="my-5" />

                        <div class="text-center">
                            <ul
                            class="pagination justify-content-center pagination-rounded"
                            >
                            <li class="page-item disabled">
                                <a href="javascript:void(0);" class="page-link"
                                ><i class="mdi mdi-chevron-left"></i
                                ></a>
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >1</a
                                >
                            </li>
                            <li class="page-item active">
                                <a href="javascript:void(0);" class="page-link"
                                >2</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >3</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >...</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >10</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                ><i class="mdi mdi-chevron-right"></i
                                ></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </b-tab>
                <b-tab title="팀2" active>
                    <div>
                    <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div>
                        <div>
                            <div class="row justify-content-between">
                                <div class="col-xl-9 col-lg-8">
                                    <img
                                    class="rounded-circle header-profile-user"
                                    src="@/assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                    />
                                    <span class="d-none d-xl-inline-block ms-1">User2</span>
                                </div>
                                <div class="col-xl-3 col-lg-4 d-flex justify-content-end align-self-center"> 
                                    <span class="text-muted">1월9일 2022</span>
                                </div>
                            </div>
                            <br>
                            <div class="position-relative mb-3">
                            <img
                                src="@/assets/images/small/img-2.jpg"
                                alt=""
                                class="img-thumbnail"
                            />
                            </div>

                            <ul class="list-inline">
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                ></i>
                                Project
                                </a>
                            </li>
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-comment-dots align-middle text-muted me-1"
                                ></i>
                                12 Comments
                                </a>
                            </li>
                            </ul>
                            <p>
                                팀2의 프로젝트 시작!
                            </p>

                            <div>
                            <a href="javascript:void(0);" class="text-primary"
                                >Read more <i class="mdi mdi-arrow-right"></i
                            ></a>
                            </div>
                        </div>

                        <hr class="my-5" />

                        <div>
                            <div class="row justify-content-between">
                                <div class="col-xl-9 col-lg-8">
                                    <img
                                    class="rounded-circle header-profile-user"
                                    src="@/assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                    />
                                    <span class="d-none d-xl-inline-block ms-1">User2</span>
                                </div>
                                <div class="col-xl-3 col-lg-4 d-flex justify-content-end align-self-center"> 
                                    <span class="text-muted">1월7일 2022</span>
                                </div>
                            </div>
                            <br>

                            <div class="position-relative mb-3">
                            <img
                                src="@/assets/images/small/img-6.jpg"
                                alt=""
                                class="img-thumbnail"
                            />

                            <div class="blog-play-icon">
                                <a
                                href="javascript: void(0);"
                                class="avatar-sm d-block mx-auto"
                                >
                                <span
                                    class="avatar-title rounded-circle font-size-18"
                                    ><i class="mdi mdi-play"></i
                                ></span>
                                </a>
                            </div>
                            </div>

                            <ul class="list-inline">
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                ></i>
                                Development
                                </a>
                            </li>
                            <li class="list-inline-item me-3">
                                <a href="javascript:void(0);" class="text-muted">
                                <i
                                    class="bx bx-comment-dots align-middle text-muted me-1"
                                ></i>
                                08 Comments
                                </a>
                            </li>
                            </ul>

                            <p>
                            팀2의 프로젝트 시작 !
                            </p>

                            <div>
                            <a href="javascript:void(0);" class="text-primary"
                                >Read more <i class="mdi mdi-arrow-right"></i
                            ></a>
                            </div>
                        </div>

                        <hr class="my-5" />

                        <div class="text-center">
                            <ul
                            class="pagination justify-content-center pagination-rounded"
                            >
                            <li class="page-item disabled">
                                <a href="javascript:void(0);" class="page-link"
                                ><i class="mdi mdi-chevron-left"></i
                                ></a>
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >1</a
                                >
                            </li>
                            <li class="page-item active">
                                <a href="javascript:void(0);" class="page-link"
                                >2</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >3</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >...</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                >10</a
                                >
                            </li>
                            <li class="page-item">
                                <a href="javascript:void(0);" class="page-link"
                                ><i class="mdi mdi-chevron-right"></i
                                ></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </b-tab>
                <b-tab title="팀3" active>
                </b-tab>
            </b-tabs>
            <!-- Nav tabs -->
            </div>
        </div>

        <div class="col-xl-3 col-lg-4">
            <div class="card">
            <div class="card-body p-4">
                <div>
                <p class="text-muted">카테고리</p>

                <ul class="list-unstyled fw-medium">
                    <li>
                    <a href="javascript:void(0);" class="text-muted py-2 d-block"
                        ><i class="mdi mdi-chevron-right me-1"></i> 프로젝트1
                        <span
                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                        >5</span>
                        </a
                    >
                    </li>
                    <li>
                    <a href="javascript:void(0);" class="text-muted py-2 d-block"
                        ><i class="mdi mdi-chevron-right me-1"></i> 프로젝트2
                        <span
                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                        >2</span></a>
                    </li>
                </ul>
                </div>
                <hr class="my-4" />

                <div>
                <p class="text-muted">해시태그</p>

                <div class="d-flex flex-wrap gap-2 widget-tag">
                    <div>
                    <a
                        href="javascript:void(0);"
                        class="badge bg-light font-size-12"
                        >Design</a
                    >
                    </div>
                    <div>
                    <a
                        href="javascript:void(0);"
                        class="badge bg-light font-size-12"
                        >Development</a
                    >
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- end card -->
        </div>
        </div>
    <!-- end row -->
    </Layout>
</template>