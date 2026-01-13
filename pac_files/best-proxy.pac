function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.253.246.238:6618",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 93.182.26.66:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 36.255.98.160:4149",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 36.255.98.167:10664",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 187.94.16.59:39665",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 36.255.98.160:9069",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 192.252.211.193:4145",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 15.160.134.84:238",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}