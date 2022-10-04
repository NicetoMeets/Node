import Head from "next/head";
import React from "react";

import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
    const followerList = [{nickname:'나이스'}, {nickname:'킴'}, {nickname:'노드버드'}];
    const followingList = [{nickname:'나이스'}, {nickname:'킴'}, {nickname:'노드버드'}];

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm></NicknameEditForm>
            <FollowList header='팔로잉 목록' data={followingList}></FollowList>
            <FollowList header='팔로워 목록' data={followerList}></FollowList>
        </AppLayout>
        </>
    );
};

export default Profile;