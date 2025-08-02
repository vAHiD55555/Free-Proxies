function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.170:3949",
        "SOCKS 114.80.38.120:3081",
        "SOCKS 38.147.98.190:8080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.83.133.167:1111",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 117.74.65.207:443",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 27.79.182.222:16000",
        "SOCKS 195.90.212.53:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 185.93.89.145:4051",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 42.118.0.25:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}