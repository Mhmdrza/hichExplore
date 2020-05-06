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
  function rialToNumber(str: string) {
    let num = parseInt(str);
    if (num > 999999) {
    }
    let isMilion = str.match(/^(\d{7,})$/) ?? [];
    let isThousand = str.match(/^(\d{3,6})$/) ?? [];
    console.log(isThousand, isMilion);
    return str.split("000")[0];
  }

  return (
    <div className="card">
      <div className="card_meta">
        <span>{moment(props.date).fromNow()}</span>
        <span className="card_meta_verified">√</span>
      </div>
      <div className="card_body">
        <img
          className="card_body_image"
          src={props.imgUrl}
          alt={props.imgAlt}
        />
        <div className="card_body_home-info">
          <div className="card_body_home-info_price">
            <PriceSpan
              text={rialToNumber(props.priceBase + "")}
              label="میلیون تومان پیش"
            />
            <PriceSpan
              text={rialToNumber(props.priceMonthly + "")}
              label="میلیون تومان اجاره"
            />
          </div>
          <div className="card_body_home-info_details">
            <SpanRow text={props.approxLocation} label={"محدوده"} />
            <SpanRow text={props.metrage + ""} label={"متر"} />
            <SpanRow text={props.numberOfRooms + ""} label={"تعداد اتاق"} />
          </div>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}

function SpanRow(props: { text: string; label: string }) {
  return (
    <div className="span-row">
      <span className="span-row_text">{props.text}</span>
      <span className="span-row_label">{props.label}</span> 
    </div>
  );
}

function PriceSpan(props: { text: string; label: string }) {
  return (
    <div className="price-span">
      <span className="price-span_text">{props.text}</span>
      <span>{props.label}</span>
    </div>
  );
}
