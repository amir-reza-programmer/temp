import React, { useEffect } from "react";
import NDividers from "./common/NDivider";
import repr from "../texts/sales/info";

import "./font-weight.css";
import TitleWrapper from "./common/TitleWrapper";
import NormalTextWrapper from "./common/NormalTextWrapper";
import ImgContainer from "./common/ImgContainer";
import "./two-col.css";
import "./About.css";
import scrollHandler from "../utils/scrollHandler";
import { useLocation } from "react-router-dom";

const SalesRepresentatives = (
  <div className="two-col-container">
    {repr.map((item, index) => {
      return (
        <a key={index} href={item.url}>
          <ImgContainer className={"two-col-item"}>
            <img src={item.img} alt={"img"} />
          </ImgContainer>
        </a>
      );
    })}
  </div>
);
const About = ({ isDesk }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.indexOf("#") === -1) {
      scrollHandler();
    }
  }, [location]);
  const imgs = ["", "", "", ""];
  const imgs_comp = imgs.map((img, index) => {
    return <div key={index} className="about__image__desk" src={img} />;
  });

  /* راه
        اندازی و سرویس انواع درب های برقی، پنوماتیک، هیدرولیک طراحی و نصب و
        سرویس انواع درب های اتوماتیک تلسکوپی شیشه‌ای نصب و راه اندازی و خدمات
        انواع آیفون های صوتی و تصویری ایرانی و خارجی تولید، نصب و راه اندازی و
        خدمات انواع راهبندهای ایرانی و خارجی هوشمند فروش، نصب و راه اندازی و
        خدمات انواع کرکره های برقی آلومینیومی و شفاف کنترلی فروش، نصب و راه
        اندازی و خدمات انواع سیستم های اعلام حریق و اطفاء حریق انواع سیستم های
        صوتی و مخابراتی و طراحی و تولید مدارات الکترونیکی طراحی و راه اندازی
        RFID و Access Control، مبنی بر گزارش گیری Online انواع گیت و دزدگیرهای
        قابل برنامه ریزی پوشاک/ اتومبیل/ اماکن
  */

  return (
    <div>
      <NDividers num={1} />
      <TitleWrapper title="آشنایی با ما" />
      <NormalTextWrapper>
        <p>
          شرکت دلتا سیستم با در اختیار داشتن کارشناسان ورزیده و کادری متبحر و
          مجرب، بالغ بر حداقل 22 سال تجربه مفید کاری در زمینه طراحی، تولید و نصب
          و راه اندازی انواع سیستم های امنیتی و حفاظتی دارد. خلاصه ای از اهم
          فعالیت های این شرکت شامل:
        </p>
        <ul className="about__ul">
          <li>راه اندازی و خدمات دوربین مداربسته و انتقال تصویر</li>
          <li>راه اندازی و سرویس انواع درب های برقی، پنوماتیک، هیدرولیک</li>
          <li>طراحی و نصب و سرویس انواع درب های اتوماتیک تلسکوپی شیشه‌ای</li>
          <li>
            نصب و راه اندازی و خدمات انواع آیفون های صوتی و تصویری ایرانی و
            خارجی
          </li>
          <li>
            تولید، نصب و راه اندازی و خدمات انواع راهبندهای ایرانی و خارجی
            هوشمند
          </li>
          <li>
            فروش، نصب و راه اندازی و خدمات انواع کرکره های برقی آلومینیومی و
            شفاف کنترلی
          </li>
          <li>
            فروش، نصب و راه اندازی و خدمات انواع سیستم های اعلام حریق و اطفاء
            حریق
          </li>
          <li>
            انواع سیستم های صوتی و مخابراتی و طراحی و تولید مدارات الکترونیکی
          </li>
          <li>
            طراحی و راه اندازی RFID و Access Control، مبنی بر گزارش گیری Online
          </li>
          <li>انواع گیت و دزدگیرهای قابل برنامه ریزی پوشاک/ اتومبیل/ اماکن</li>
        </ul>
        <p>
          همچنین شرکت دلتا سیستم نمایندگی فروش و خدمات پس از فروش شرکت های خارجی
          زیر می‌باشد:
        </p>
      </NormalTextWrapper>
      <NDividers num={1} />
      {SalesRepresentatives}
      <TitleWrapper title="پروژه‌ ها" />
      <NormalTextWrapper>
        90% پروژه های ساختمانی شرکت سرمایه‌گذاری مسکن در سراسر کشور، شرکت
        داروسازی زکریای تبریز، مجتمع آموزشی پژوهشی امام خمینی قم، مهمانسرای شرکت
        نفت محمودآباد، زائرسرای شرکت نفت مشهد، پتروشیمی ماهشهر، پروژۀ ساختمانی
        اجلاس سران کشورهای اسلامی، مجتمع های مسکونی نیروی هوایی ارتش ولنجک،
        پروژۀ ستاد مشترک سپاه قصر فیروزه، برج های مسکونی سازمان تامین اجتماعی
        (برج های لاله و لادن ولنجک)، پروژۀ نواب، وزارت راه و ترابری ساختمان شهید
        دادمان، وزارت امور خارجه ساختمان مرکزی، پروژۀ ساختمان وزارت کشور خیابان
        فاطمی، بیمارستان 501 ارتش خیابان فاطمی، برج های سامان (1وو2و3)، اسکان،
        آپادانا، شهرک اکباتان، هتل ارگ جدید بم، هتل تجارت بندرعباس، پارکینگ های
        طبقاتی بیمارستان خاتم الانبیاء و شهرداری تجریش، مجتمع های صنعتی کاشی
        الوند قزوین، مجتمع چشم پزشکی نور تقاطع نیایش ولیعصر، اکثر هتل های 5
        ستاره اصفهان و مشهد، دانشگاه تربیت مدرس خ جلال آل احمد، پروژه های کنترل
        تردد صدا و سیما جام جم، برخی از پروژه های ریاست جمهوری، وزارت تعاون
        تبلیغات اسلامی و …
      </NormalTextWrapper>
      {isDesk ? null : (
        <ImgContainer className="about__image-container">
          <img className="about__image" src={"/images/HomeBillboard.png"} />
        </ImgContainer>
      )}
      {isDesk && <div className="projects_imgs_desk">{imgs_comp}</div>}
    </div>
  );
};
export default About;
