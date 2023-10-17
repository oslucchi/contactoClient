import React from "react";
import { Events } from "../../modules/Events";

import dayjs from "dayjs";
import styles from "./agenda.style";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as icons from "../../../assets/icons/index";

type Props = {
  event: Events;
  handlePress: (idEvent: number) => void;
};

const UpcomingCard: React.FC<Props> = ({ event, handlePress }) => {
  let invitees: string = "";
  var separator: string = "";

  event?.participants?.forEach((participant) => {
    invitees += separator + participant.familyName;
    separator = ", ";
  });

  var phoneCall = require("../../../assets/icons/phoneCall.png");
  var videoCall = require("../../../assets/icons/videoCall.png");
  var meetInPerson = require("../../../assets/icons/meetInPerson.png");
  var whiteIcon = require("../../../assets/icons/iconaBianca.png");

  var iconName: any = whiteIcon;

  icons.default.phoneCall;
  switch (event?.iconName) {
    case "phoneCall":
      iconName = phoneCall;
      break;
    case "videoCall":
      iconName = videoCall;
      break;
    case "meetInPerson":
      iconName = meetInPerson;
      break;
  }

  console.log(event?.idEvent, iconName);

  return (
    <TouchableOpacity style={[styles.cardsContainer, styles.shadowProp]}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.headerTitle}>
          {dayjs(event?.date).format("MM/DD")}
          {" - "}
          {event?.description}
        </Text>
        <Text numberOfLines={1} style={styles.header}>
          {dayjs(event?.date).format("HH:mm")}
          {" - "}
          {dayjs(event?.date).add(event?.duration, "minute").format("HH:mm")}
          {"   "}
          {event?.company}
        </Text>
        {event.participants ? (
          <Text numberOfLines={1}>{invitees}</Text>
        ) : (
          <Text numberOfLines={1} />
        )}
      </View>
      <View style={styles.imgContainer}>
        <Image source={iconName} style={styles.imgLogo} />
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingCard;
