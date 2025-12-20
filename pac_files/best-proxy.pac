function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 52.78.193.98:3128",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.249.225.238:8081",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.41.33.169:58080",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 47.242.6.193:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}