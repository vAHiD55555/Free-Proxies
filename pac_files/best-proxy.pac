function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 72.10.160.174:31525",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 115.127.105.163:6699",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 103.174.178.133:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}