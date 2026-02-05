function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.189.194:8123",
        "SOCKS 213.35.110.67:10852",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 146.235.19.84:10811",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 168.245.197.146:80",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 35.221.177.183:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 94.31.176.234:10808",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 18.141.177.23:80",
        "SOCKS 176.34.40.50:1080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}