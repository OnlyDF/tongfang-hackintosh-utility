import React, { Component } from "react";
import { Button } from "antd";

import str from "../resource/string";

import "../styles/About.styl";

export default class About extends Component {
  issuePage = "https://github.com/kirainmoe/tongfang-hackintosh-utility/issues/new";

  openPage(url) {
    window.electron.openPage(url);
  }

  render() {
    return (
      <div className="about">
        <h3 className="page-title">{str("about")}</h3>
        <div className="description">
          <p>
            Tongfang Hackintosh Utility (同方黑苹果助手，前身 Project: STAR BEAT!) ，主要作用是方便使用清华同方模具的神舟、机械革命等其它品牌的笔记本用户安装 macOS.
          </p>

          <div className="bugreport-feature">
            <h3 className="subtitle">Feature Request & Bug Report</h3>
            <div>
              <p>
                如果你在使用过程中遇到 BUG，或者想要什么功能，可以在
                <Button type="link" onClick={() => this.openPage(this.issuePage)} style={{ padding: 0, margin: 0, height: 'auto' }}>
                  此页面
                </Button>
                中告诉我，或者发送邮件给 kirainmoe@gmail.com .
              </p>
            </div>
          </div>

          <div className="donate">
            <h3 className="subtitle">Disclamer & Need Help</h3>
            <div>
              <p>
                本程序和仓库提供的配置文件都是免费的，仅供学习，请勿用于商业用途。
                <br />因使用本程序及配置文件造成的任何后果和损坏，开发者不承担任何形式的责任。
                <br />如果你需要获得帮助，请加入下面的 QQ 群。
                <br /><br />你也可以扫一扫二维码，支持开发者_(:з」∠)_
              </p>
              <table>
                <thead>
                  <tr>
                    <td>QQ 群</td>
                    <td>支付宝</td>
                    <td>微信</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://i.loli.net/2019/11/23/Fzkeprn9PA7bf6q.png"
                        width="110px"
                        alt="qqgroup"
                      />
                    </td>                    
                    <td>
                      <img
                        src="https://i.loli.net/2019/09/19/j8doaIVYWtMXlNJ.png"
                        width="160px"
                        alt="alipay"
                      />
                    </td>
                    <td>
                      <img
                        src="https://i.loli.net/2019/09/19/xkoHIsuZLvtzDSP.png"
                        width="160px"
                        alt="wechat"
                      />
                    </td>             
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p
            align="center"
            className="copyright"
            style={{
              marginTop: 20
            }}
          >
            &copy;2020 Ami Technology, All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
