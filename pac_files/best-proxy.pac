function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.208.106:8192",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 114.80.40.130:3081",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 67.43.228.254:11053",
        "SOCKS 74.48.194.151:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 152.53.36.101:20447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}