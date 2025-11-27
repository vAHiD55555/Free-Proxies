function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 157.180.121.252:58333",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 152.53.171.242:58727",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.53.171.242:10809",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 152.53.171.242:13671",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 172.104.4.144:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}