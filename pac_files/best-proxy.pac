function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.194:4598",
        "SOCKS 198.13.190.60:1080",
        "SOCKS 206.123.156.207:6094",
        "SOCKS 58.19.55.7:15077",
        "SOCKS 206.123.156.231:15222",
        "SOCKS 206.123.156.193:5097",
        "SOCKS 58.19.55.4:15005",
        "SOCKS 206.123.156.198:5483",
        "SOCKS 164.90.185.232:1081",
        "SOCKS 115.127.95.82:8080",
        "SOCKS 58.19.55.88:15030",
        "SOCKS 206.123.156.231:12387",
        "SOCKS 203.25.78.209:58367",
        "SOCKS 157.230.178.188:20012",
        "SOCKS 206.123.156.195:4120",
        "SOCKS 58.19.55.4:15151",
        "SOCKS 58.19.55.4:15092",
        "SOCKS 58.19.55.4:15329",
        "SOCKS 138.68.247.51:1080",
        "SOCKS 163.172.131.178:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}