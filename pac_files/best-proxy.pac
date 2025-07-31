function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 177.10.145.24:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 117.74.65.207:443",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 212.110.188.213:34411",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 38.158.83.161:999",
        "SOCKS 24.176.35.228:8080",
        "SOCKS 171.237.93.193:1004",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 51.178.68.226:62202",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}