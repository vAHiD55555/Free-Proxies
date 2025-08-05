function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.189.218.158:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 213.231.7.10:8282",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 171.237.84.204:1004",
        "SOCKS 42.118.2.170:16000",
        "SOCKS 177.200.80.6:11221",
        "SOCKS 67.43.228.253:13271",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}