function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 42.113.21.62:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 27.79.129.170:16000",
        "SOCKS 87.107.48.53:1080",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 115.79.70.69:8470",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 159.112.136.219:18081",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}