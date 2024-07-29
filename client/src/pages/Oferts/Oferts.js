import "./oferts.scss";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllOferts } from "../../stores/admin/admin.actions";
import ScrollBox from "../../pages/Home/ScrollBox/ScrollBox";
import ColorCard from "../../pages/Home/ScrollBox/ColorCard";
import moment from "moment";
import { withTranslation } from 'react-i18next';
import spinner from "../../assets/images/Spin-1s-200px.svg";
import {motion } from 'framer-motion';
import {animationOne, transition} from '../../Transitions/Transitions';

const Oferts = ({ t,STORE_OFERTS, fetchAllOfertsEffect,STORE_ADMIN }) => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavir: "smooth",
  });

  console.log(STORE_OFERTS);
  useEffect(() => {
    fetchAllOfertsEffect();
  }, [fetchAllOfertsEffect]);

  return (
    <>
    {STORE_ADMIN && STORE_ADMIN.ofertsLoading ?(
       <main className="product--main">
        <img src={spinner} alt='spinnerloading' />
      </main>
    ):(
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      >
        <h1>{t('page.oferts.title')}</h1>
    <main className="product--main">
            
            <div  className="product--main-col">
              {STORE_OFERTS && STORE_OFERTS.length > 0 ? (
                <>
                  <h1>{t("page.oferts.day")}</h1>
                  <ScrollBox>
                    {// eslint-disable-next-line
                    STORE_OFERTS.map((ofert, index) => {
                      let date = Date.now();
                      var fecha1 = moment(ofert.createdAt);
                      var fecha2 = moment(date);
                      var diferencia = fecha2.diff(fecha1, "days");
                      if (ofert.ofertStatus === "day" && diferencia < 1) {
                        if (ofert.products.length > 0) {
                          return ofert.products.map((product, index) => {
                            return <ColorCard product={product} key={index} />;
                          });
                        }
                      }
                    })}
                  </ScrollBox>
                </>
              ) : (
                <p>No offers today</p>
              )}
            </div>
            <div className="product--main-col">
              {STORE_OFERTS && STORE_OFERTS.length > 0 ? (
                <>
                  <h1>{t('page.oferts.week')}</h1>
                  <ScrollBox>
                    {// eslint-disable-next-line
                    STORE_OFERTS.map((ofert, index) => {
                      let date = Date.now();
                      var fecha1 = moment(ofert.createdAt);
                      var fecha2 = moment(date);
                      var diferencia = fecha2.diff(fecha1, "days");

                      if (ofert.ofertStatus === "week" && diferencia < 7) {
                        if (ofert.products.length > 0) {
                          return ofert.products.map((product, index) => {
                            return <ColorCard product={product} key={index} />;
                          });
                        }
                      }
                    })}
                  </ScrollBox>
                </>
              ) : (
                <p>No Week offers </p>
              )}
            </div>

            <div className="product--main-col">
              {STORE_OFERTS && STORE_OFERTS.length > 0 ? (
                <>
                  <h1>{t("page.oferts.month")}</h1>
                  <ScrollBox>
                    {// eslint-disable-next-line
                    STORE_OFERTS.map((ofert, index) => {
                      let date = Date.now();
                      var fecha1 = moment(ofert.createdAt);
                      var fecha2 = moment(date);
                      var diferencia = fecha2.diff(fecha1, "days");

                      if (ofert.ofertStatus === "month" && diferencia < 31) {
                        if (ofert.products.length > 0) {
                          return ofert.products.map((product, index) => {
                            return <ColorCard product={product} key={index} />;
                          });
                        }
                      }
                    })}
                  </ScrollBox>
                </>
              ) : (
                <p>No Month Oferts</p>
              )}
            </div>

            <div className="product--main-col">
              {STORE_OFERTS && STORE_OFERTS.length > 0 ? (
                <>
                  <h1>{t('page.oferts.season')}</h1>
                  <ScrollBox>
                    {// eslint-disable-next-line
                    STORE_OFERTS.map((ofert, index) => {
                      if (ofert.ofertStatus === "season") {
                        if (ofert.products.length > 0) {
                          return ofert.products.map((product, index) => {
                            return <ColorCard product={product} key={index} />;
                          });
                        }
                      }
                    })}
                  </ScrollBox>
                </>
              ) : (
                <p>No Season Oferts</p>
              )}
            </div>

            <div className="product--main-col">
              {STORE_OFERTS && STORE_OFERTS.length > 0 ? (
                <>
                  <h1>{t("page.oferts.holiday")}</h1>
                  <ScrollBox>
                    {// eslint-disable-next-line
                    STORE_OFERTS.map((ofert, index) => {
                      if (ofert.ofertStatus === "holiday") {
                        if (ofert.products.length > 0) {
                          return ofert.products.map((product, index) => {
                            return <ColorCard product={product} key={index} />;
                          });
                        }
                      }
                    })}
                  </ScrollBox>
                </>
              ) : (
                <p>No Holiday Oferts</p>
              )}
            </div>
    </main>
    </motion.div>
    )}
     
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    STORE_OFERTS: state.adminReducers.oferts,
    STORE_ADMIN: state.adminReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllOfertsEffect: () => dispatch(fetchAllOferts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Oferts));
