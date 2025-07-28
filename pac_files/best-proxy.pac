function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.4.144:9050",
        "SOCKS 8.222.197.104:1080",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 197.243.23.137:3128",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 27.71.141.120:16000",
        "SOCKS 194.67.105.229:3128",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 18.179.46.106:999",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 47.236.37.129:18081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}