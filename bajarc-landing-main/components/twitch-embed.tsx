"use client";

import React from "react";
// @ts-ignore
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

export default function TwitchEmbed() {
  return (
    <>
      <ReactTwitchEmbedVideo channel="bajarc" width="100%" />
    </>
  );
}
