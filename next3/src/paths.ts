const paths = {
    homePath(){
        return '/';
    },
    topicShowPath(topic: String){
        return `/topic/${topic}`;
    },
    postCreatePath(topic: String){
        return `/topic/${topic}/post/new`;
    },
    postShowPath(topic: String, postId: String){
        return `/topic/${topic}/post/${postId}`;
    },
};