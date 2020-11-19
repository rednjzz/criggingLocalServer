const getCraneDistance = (craneName) => {
  let crane = {};
  switch (craneName) {
    case "L_1030_2.1":
      crane.rearDistance = 3.15;
      crane.frontDistance = 5.535;
      crane.trigger = 6.5;
      return crane;
    case "L_1040_2.1":
      crane.rearDistance = 3.33;
      crane.frontDistance = 5.535;
      crane.trigger = 6.5;
      return crane;
    case "L_1050_3.1":
      crane.rearDistance = 3.53;
      crane.frontDistance = 5.963;
      crane.trigger = 6.9;
      return crane;
    case "L_1055_3.2":
      crane.rearDistance = 4.005;
      crane.frontDistance = 6.263;
      crane.trigger = 6.8;
      return crane;
    case "L_1060_3.1":
      crane.rearDistance = 3.986;
      crane.frontDistance = 6.262;
      crane.trigger = 6.8;
      return crane;
    case "L_1070_4.1":
      crane.rearDistance = 3.980;
      crane.frontDistance = 5.963;
      crane.trigger = 6.8;
      return crane;
    case "L_1070_4.2":
      crane.rearDistance = 3.980;
      crane.frontDistance = 5.963;
      crane.trigger = 6.8;
      return crane;
    case "L_1090_4.1":
      crane.rearDistance = 4.08;
      crane.frontDistance = 7.084;
      crane.trigger = 7.5;
      return crane;
    case "L_1095_5.1":
      crane.rearDistance = 4.38;
      crane.frontDistance = 7.855;
      crane.trigger = 7.55;
      return crane;
    case "L_1100_4.2":
      crane.rearDistance = 4.527;
      crane.frontDistance = 7.179;
      crane.trigger = 7.275;
      return crane;
    case "L_1100_5.2":
      crane.rearDistance = 3.972;
      crane.frontDistance = 8.02;
      crane.trigger = 7.275;
      return crane;
    case "L_1130_5.1":
      crane.rearDistance = 4.88;
      crane.frontDistance = 8.45;
      crane.trigger = 8.05;
      return crane;
    case "L_1150_6.1":
      crane.rearDistance = 4.9;
      crane.frontDistance = 9.02;
      crane.trigger = 8.914;
      return crane;
    case "L_1200_5.1":
      crane.rearDistance = 4.85;
      crane.frontDistance = 9.061;
      crane.trigger = 8.9;
      return crane;
    case "L_1250_6.1":
      crane.rearDistance = 5.6;
      crane.frontDistance = 10.99;
      crane.trigger = 9.1;
      return crane;
    case "L_1300_6.1":
      crane.rearDistance = 5.53;
      crane.frontDistance = 10.990;
      crane.trigger = 9.1;
      return crane;
    case "L_1300_6.2":
      crane.rearDistance = 4.53;
      crane.frontDistance = 11.060;
      crane.trigger = 9.132;
      return crane;
    case "L_1350_6.1":
      crane.rearDistance = 5.7;
      crane.frontDistance = 11.060;
      crane.trigger = 9.13;
      return crane;
    case "L_1400_7.1":
      crane.rearDistance = 6.6;
      crane.frontDistance = 11.959;
      crane.trigger = 10.21;
      return crane;
    case "L_1450_8.1":
      crane.rearDistance = 7;
      crane.frontDistance = 13.585;
      crane.trigger = 10.3;
      return crane;
    case "L_1500_50m_8.1":
      crane.rearDistance = 6.025;
      crane.frontDistance = 13.030;
      crane.trigger = 10.3;
      return crane;
    case "L_1500_84m_8.1":
      crane.rearDistance = 6.025;
      crane.frontDistance = 13.030;
      crane.trigger = 10.3;
      return crane;
    case "L_1750_9.1":
      crane.rearDistance = 8.33;
      crane.frontDistance = 14.615;
      crane.trigger = 12.619;
      return crane;
    case "L_11200_9.1":
      crane.rearDistance = 8.93;
      crane.frontDistance = 12.955;
      crane.trigger = 13.016;
      return crane;
  }
};

export default getCraneDistance;
