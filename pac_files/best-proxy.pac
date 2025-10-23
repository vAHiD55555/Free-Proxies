function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.222.65.100:1976",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 137.184.152.66:20169",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 159.223.164.184:20515",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 152.53.171.242:10809",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 159.223.164.184:20280",
        "SOCKS 47.79.22.55:1011",
        "SOCKS 152.53.171.242:31958",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}