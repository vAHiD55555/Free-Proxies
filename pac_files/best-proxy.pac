function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.4:15351",
        "SOCKS 206.123.156.207:5041",
        "SOCKS 58.19.55.7:15395",
        "SOCKS 58.19.55.7:15181",
        "SOCKS 65.108.216.128:9050",
        "SOCKS 58.19.55.7:15048",
        "SOCKS 58.19.55.4:15234",
        "SOCKS 58.19.55.4:15088",
        "SOCKS 92.113.149.172:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 58.19.55.7:15152",
        "SOCKS 58.19.55.7:15212",
        "SOCKS 217.76.245.80:999",
        "SOCKS 206.123.156.207:4714",
        "SOCKS 58.19.55.4:15023",
        "SOCKS 206.123.156.231:4271",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 206.123.156.207:20212",
        "SOCKS 58.19.55.4:15368",
        "SOCKS 206.123.156.231:4615",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}