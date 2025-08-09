function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 116.98.190.20:1010",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 46.105.139.17:50012",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 223.204.85.163:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}