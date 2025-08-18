function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.135.156.183:8080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 117.74.65.207:443",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 124.6.51.226:8099",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 38.194.246.34:999",
        "SOCKS 211.109.199.99:80",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 173.209.63.66:8232",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}