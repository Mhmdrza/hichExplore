import React from "react";
import moment from "moment";
import "./card.scss";

interface CardProps {
  date: string;
  isVeryfied: boolean;
  imgUrl: string;
  imgAlt: string;
  priceBase: number;
  priceMonthly: number;
  metrage: number;
  numberOfRooms: number;
  approxLocation: string;
}

export default function Card(props: CardProps) {
  function rialToMillion(str: string) {
    let rounded = str.split("000");
    return rounded[0];
  }
  return (
    <div className="card">
      <div className="card_meta">
        <span>{moment(props.date).fromNow()}</span>
        <span>•</span>
      </div>
      <div className="card_body">
        <img
          className="card_body_image"
          src={props.imgUrl}
          alt={props.imgAlt}
        />
        <div className="card_body_home-info">
          <div className="card_body_home-info_price">
            <span className="card_body_home-info_price_rahn">
              {rialToMillion(props.priceBase + "")}
              <span>میلیون تومان</span>
              <span>پیش</span>
            </span>
            <span className="card_body_home-info_price_ejare">
              {rialToMillion(props.priceMonthly + "")}
              <span>میلیون تومان</span>
              <span>اجاره</span>
            </span>
          </div>
          <div className="card_body_home-info_details">
            <span>{props.approxLocation}</span>
            <span>متر  {props.metrage}</span>
            <span>{props.numberOfRooms}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
