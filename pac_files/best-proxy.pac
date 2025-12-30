function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 52.78.193.98:157",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 103.255.66.109:8080",
        "SOCKS 103.122.0.151:8181",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 202.62.52.206:1080",
        "SOCKS 62.60.131.189:4092",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 115.127.119.253:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}