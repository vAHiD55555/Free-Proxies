function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.12.249.123:8026",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 129.226.207.13:20201",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 197.254.29.214:32650",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 92.242.184.4:4145",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 117.161.170.163:9378",
        "SOCKS 135.125.97.184:46107",
        "SOCKS 117.161.170.163:9012",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 47.79.94.72:1122",
        "SOCKS 157.20.253.43:8989",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 193.227.129.215:52203",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}