function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.27.141.23:3080",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 15.235.172.129:27391",
        "SOCKS 153.80.242.105:8080",
        "SOCKS 221.225.48.64:8989",
        "SOCKS 84.52.227.36:9050",
        "SOCKS 43.252.237.169:1080",
        "SOCKS 8.213.134.213:443",
        "SOCKS 103.145.133.84:1080",
        "SOCKS 178.128.53.12:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 104.236.171.128:41047",
        "SOCKS 77.37.209.86:1081",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 195.19.49.206:1080",
        "SOCKS 178.130.47.21:1082",
        "SOCKS 152.70.236.84:1080",
        "SOCKS 171.253.92.42:1083",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}