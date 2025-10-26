function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 185.148.146.165:45188",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 185.93.89.180:4459",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 62.205.169.74:53281",
        "SOCKS 185.93.89.163:25776",
        "SOCKS 185.93.89.180:5341",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.93.89.147:24450",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 185.93.89.180:6478",
        "SOCKS 85.143.254.38:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}