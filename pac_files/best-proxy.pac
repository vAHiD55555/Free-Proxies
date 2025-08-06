function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.21:5423",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 27.79.169.252:16000",
        "SOCKS 62.33.53.248:3128",
        "SOCKS 72.240.9.63:80",
        "SOCKS 83.222.184.87:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 117.74.65.207:80",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 103.93.93.66:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}