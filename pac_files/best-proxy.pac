function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.114.53.2:8080",
        "SOCKS 152.53.171.242:12557",
        "SOCKS 62.60.131.178:16140",
        "SOCKS 62.60.131.181:13556",
        "SOCKS 213.35.110.67:10800",
        "SOCKS 36.255.98.151:4157",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 160.250.197.49:8080",
        "SOCKS 62.60.131.186:4023",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 146.235.19.84:10864",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 209.38.51.97:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 36.255.98.163:14801",
        "SOCKS 169.57.157.148:80",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 36.255.98.165:10499",
        "SOCKS 36.255.98.178:5153",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}