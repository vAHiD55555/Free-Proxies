function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.156.196:50007",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 203.175.126.229:8080",
        "SOCKS 42.119.2.165:16000",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 164.90.193.32:3128",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 113.22.184.106:16000",
        "SOCKS 171.228.181.175:4001",
        "SOCKS 42.118.1.132:16000",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 117.74.65.207:443",
        "SOCKS 165.225.72.38:11719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}