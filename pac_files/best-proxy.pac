function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.155.197.103:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 206.189.140.195:3128",
        "SOCKS 42.113.20.127:16000",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 123.21.13.5:1001",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 209.141.62.12:5555",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 27.79.149.233:16000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 54.37.72.89:80",
        "SOCKS 115.72.15.14:10007",
        "SOCKS 115.72.44.82:10007",
        "SOCKS 8.222.249.27:33333",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}